//DATE : 10/1/20

import React from "react";
import {useRouter} from "next/router";

const id = () => {
  const router =  useRouter()
  const {id} = router.query
  return (
    <h1 className={"id"}>
      note {id}
    </h1>
  )
}
export default id;