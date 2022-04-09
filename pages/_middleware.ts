import {NextRequest} from "next/server";


//const secret = process.env.SECRET_ACCESS_TOKEN_JWT
const middleware = (req: NextRequest) => {
    // const token = req.cookies
    // console.log(token)
    // const url = req.url
    // if (!url.includes('/login')) {
    //     if (token === undefined) {
    //         return NextResponse.redirect(`${routes}/login`)
    //     }
    //     try {
    //         verify("token", "mysuperdupyrandompasswordformysecrettoallowjwttocrypttoken")
    //         return NextResponse.next()
    //     } catch (err) {
    //         return NextResponse.redirect(`${routes}/login`)
    //     }
    // }
    // return NextResponse.next()
}

export default middleware