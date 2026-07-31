-- CreateTable
CREATE TABLE "CustomOrder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "measurements" JSONB NOT NULL,
    "notes" TEXT,
    "timeline" TEXT NOT NULL,
    "imageUrls" TEXT[],
    "agreed" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomOrder_pkey" PRIMARY KEY ("id")
);
