// app/api/saveUser/route.js
import chalk from 'chalk';
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from "next/cache"

export async function POST(request) {

    let values = await request.json()

    values = {id:uuidv4(), ...values}
    let data = JSON.stringify(values)
	const filePath = path.join(process.cwd(), "data", "users.txt")

	fs.mkdirSync(path.dirname(filePath), { recursive: true })
	fs.appendFileSync(filePath, data +'\n')
	console.log(chalk.magentaBright.underline.bold("User saved successfull"))
	return NextResponse.json(
		{ message: "User saved successfully" },
		{ status: 200 }
	)
}

export async function GET() {
	const filePath = path.join(process.cwd(), "data", "users.txt")

	if (!fs.existsSync(filePath)) {
		return NextResponse.json({ error: "No users found" }, { status: 404 })
	}

	const data = fs.readFileSync(filePath, "utf-8")
	let users = data.split("\n").filter((line) => line.trim() !== "")
	 users = users.map((line) => { return JSON.parse(line.trim())  });
	return NextResponse.json(users)
}

