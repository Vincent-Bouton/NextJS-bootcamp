//DATE : 10/1/20

import React from "react";
import {useRouter} from "next/router";

const Page = () => {
  const router =  useRouter()
  const {params} = router.query
  console.log(params)
  return (
    <h1 className={"id"}>
      note
    </h1>
  )
}
export default Page;