import { PrismaClient } from "@prisma/client"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"

async function main() {
  const adapter = new PrismaBetterSqlite3({
    url: "file:../dev.db",
  })
  const prisma = new PrismaClient({ adapter })

  console.log("Testing database connection...")
  
  try {
    // Create a test message
    const newMessage = await prisma.contactMessage.create({
      data: {
        name: "Verification Test",
        email: "verify@test.com",
        subject: "System Check",
        message: "This is a verification message to ensure the database layer is fully functional."
      }
    })
    console.log("Successfully created test message:", newMessage.id)

    // Read it back
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5
    })
    console.log(`Found ${messages.length} messages in total.`)
    console.log("Recent messages:", JSON.stringify(messages, null, 2))

    // Cleanup test data (optional, but good for hygiene)
    // await prisma.contactMessage.delete({ where: { id: newMessage.id } })
    // console.log("Cleaned up test message.")

  } catch (error) {
    console.error("Database verification failed:", error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
