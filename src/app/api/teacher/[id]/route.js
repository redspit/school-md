// app/api/saveUser/route.js
import chalk from 'chalk';
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from 'uuid';

export async function GET(req, context) {
	const { id } = await context.params;

	const filePath = path.join(process.cwd(), "data", "users.txt")

	if (!fs.existsSync(filePath)) {
		return NextResponse.json({ error: "No users found" }, { status: 404 })
	}
	const data = fs.readFileSync(filePath, "utf-8")

	let users = data.split("\n").filter((line) => line.trim() !== "")
	users = users.map((line) => {
		return JSON.parse(line.trim())
	})
	const user = users.filter((u) => u.id === id || u.username === id)
	if (user) {
		return NextResponse.json(user)
	}
	return NextResponse.json({ message: "no user found" })
}