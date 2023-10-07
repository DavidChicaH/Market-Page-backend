import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../db";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users");
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal server error");
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const response: QueryResult = await pool.query(
    `SELECT * FROM users WHERE id = ${req.params.id}`
  );
  res.status(200).json(response.rows)
};

export const createUser = async (req: Request, res: Response) => {
    const {name, email} = req.body;
    const response : QueryResult = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email])
    return res.json({
        message: "User Added Succesfully",
        body: {
            user: {name, email}
        }
    })

}