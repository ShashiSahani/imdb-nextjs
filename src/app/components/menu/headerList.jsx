import Link from "next/link";
import React from "react";

function HeaderList({ title, address, Icon }) {
  return (
    <div className="flex items-center ">
      <Link href={address} className="text-black flex flex-row items-center  hover:text-yellow-600">
        <Icon  className="text-4xl font-semibold  hover:text-yellow-600" />
        <p className="text-lg font-semibold  hover:text-yellow-600">{title}</p>
      </Link>
    </div>
  );
}

export default HeaderList;
