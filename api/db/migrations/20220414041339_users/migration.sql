-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT E'external',
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
