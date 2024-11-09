import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    //@ts-expect-error - The accessToken is not defined in the types
    const { accessToken } = await getAccessToken(null, {
      audience: process.env.AUTH0_AUDIENCE,
    });
    return NextResponse.json({ token: accessToken });
  } catch (error) {
    console.error("Error al obtener el token:", error);
    return NextResponse.json(
      { message: "Error al obtener el token" },
      { status: 500 },
    );
  }
}
