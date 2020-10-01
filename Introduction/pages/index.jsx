//DATE : 10/1/20

import React from "react";
import Link from "next/link";
import '../../src/components/style.module.css'

const index = () => {
  return (
    <div className={"index"}>
      <h1>Index page</h1>
      <Link href={"/notes"}>
        <a>
          note
        </a>
      </Link>
    </div>
  )
}
export default index;