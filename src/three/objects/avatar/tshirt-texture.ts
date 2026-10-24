import { CanvasTexture, NearestFilter, LinearSRGBColorSpace } from "three";

// High-resolution 8-BIT FONTS style representation for 'A' and 'R'
const A_GRID = [
  "      ###      ",
  "     #####     ",
  "    #######    ",
  "   #### ####   ",
  "  ####   ####  ",
  " ####     #### ",
  "####       ####",
  "####       ####",
  "####       ####",
  "####       ####",
  "###############",
  "###############",
  "####       ####",
  "####       ####",
  "####       ####",
  "####       ####",
  "####       ####",
  "####       ####",
  "####       ####",
];

const R_GRID = [
  "############# ",
  "##############",
  "####     #####",
  "####      ####",
  "####      ####",
  "####      ####",
  "####     #####",
  "###########   ",
  "############# ",
  "####  #####   ",
  "####   ####   ",
  "####    ####  ",
  "####     #### ",
  "####      ####",
  "####      ####",
  "####      ####",
  "####      ####",
  "####      ####",
  "####      ####",
];

let cachedTexture: CanvasTexture | null = null;

export const createArPixelTexture = (): CanvasTexture => {
  if (cachedTexture) return cachedTexture;

  const aH = A_GRID.length;
  const aW = A_GRID[0]?.length ?? 15;
  const rH = R_GRID.length;
  const rW = R_GRID[0]?.length ?? 15;

  const gridH = Math.max(aH, rH);
  const gap = 3;
  const paddingX = 4;
  const paddingY = 4;
  const extrusionDepth = 3;

  const totalCols = paddingX * 2 + aW + gap + rW + extrusionDepth + 2;
  const totalRows = paddingY * 2 + gridH + extrusionDepth + 2;

  const mask: number[][] = Array.from({ length: totalRows }, () => Array(totalCols).fill(0));

  const startY = paddingY;
  const startX_A = paddingX;
  const startX_R = paddingX + aW + gap;

  for (let r = 0; r < aH; r++) {
    const row = A_GRID[r];
    if (!row) continue;
    for (let c = 0; c < aW; c++) {
      if (row[c] === "#") {
        const mRow = mask[startY + r];
        if (mRow) mRow[startX_A + c] = 1;
      }
    }
  }

  for (let r = 0; r < rH; r++) {
    const row = R_GRID[r];
    if (!row) continue;
    for (let c = 0; c < rW; c++) {
      if (row[c] === "#") {
        const mRow = mask[startY + r];
        if (mRow) mRow[startX_R + c] = 1;
      }
    }
  }

  const canvas = document.createElement("canvas");
  const pixelScale = 8;
  canvas.width = totalCols * pixelScale;
  canvas.height = totalRows * pixelScale;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context for t-shirt canvas");
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const silhouette: number[][] = Array.from({ length: totalRows }, () => Array(totalCols).fill(0));
  for (let y = 0; y < totalRows; y++) {
    const mRow = mask[y];
    if (!mRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (mRow[x]) {
        for (let d = 0; d <= extrusionDepth; d++) {
          if (y + d < totalRows && x + d < totalCols) {
            const sRow = silhouette[y + d];
            if (sRow) sRow[x + d] = 1;
          }
        }
      }
    }
  }

  // 1. Dark outline around combined silhouette
  ctx.fillStyle = "#190C2A";
  for (let y = 0; y < totalRows; y++) {
    const sRow = silhouette[y];
    if (!sRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (!sRow[x]) {
        let isBorder = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < totalRows && nx >= 0 && nx < totalCols) {
              if (silhouette[ny]?.[nx]) isBorder = true;
            }
          }
        }
        if (isBorder) {
          ctx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
        }
      }
    }
  }

  // 2. Extrusion shadow layers (deep red -> mid orange -> bright orange)
  const extrusionColors: string[] = ["#B92D14", "#E14B1C", "#FC732A"];
  for (let depth = extrusionDepth; depth >= 1; depth--) {
    ctx.fillStyle = extrusionColors[extrusionDepth - depth] ?? extrusionColors[0]!;
    for (let y = 0; y < totalRows; y++) {
      const mRow = mask[y];
      if (!mRow) continue;
      for (let x = 0; x < totalCols; x++) {
        if (mRow[x]) {
          const ty = y + depth;
          const tx = x + depth;
          if (ty < totalRows && tx < totalCols && !mask[ty]?.[tx]) {
            ctx.fillRect(tx * pixelScale, ty * pixelScale, pixelScale, pixelScale);
          }
        }
      }
    }
  }

  // 3. Front face (golden yellow)
  ctx.fillStyle = "#FEE34B";
  for (let y = 0; y < totalRows; y++) {
    const mRow = mask[y];
    if (!mRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (mRow[x]) {
        ctx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
      }
    }
  }

  // 4. White highlight on top edges
  ctx.fillStyle = "#FFFFFF";
  for (let y = 1; y < totalRows; y++) {
    const mRow = mask[y];
    if (!mRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (mRow[x] && !mask[y - 1]?.[x]) {
        ctx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
      }
    }
  }

  const texture = new CanvasTexture(canvas);
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.colorSpace = LinearSRGBColorSpace;
  texture.needsUpdate = true;

  cachedTexture = texture;
  return texture;
};
