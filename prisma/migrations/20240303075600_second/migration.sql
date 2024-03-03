-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nota" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "ststus" BOOLEAN NOT NULL DEFAULT false,
    "notaId" INTEGER NOT NULL,
    CONSTRAINT "Nota_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Nota" ("id", "notaId", "text") SELECT "id", "notaId", "text" FROM "Nota";
DROP TABLE "Nota";
ALTER TABLE "new_Nota" RENAME TO "Nota";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
