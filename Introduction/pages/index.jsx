//DATE : 10/1/20

import React from "react";
import Link from "next/link";

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