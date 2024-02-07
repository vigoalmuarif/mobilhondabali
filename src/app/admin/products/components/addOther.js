"use client";
import { Label, TextInput } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useState } from "react";



let nextID = 1;

export default function Others() {
  const [others, setOthers] = useState([]);
  function handleothers() {
    setOthers([...others, { id: nextID++ }]);
  }

  function handleTrash(id) {
    const data = others.filter((item) => {
      return item.id !== id;
    });
    setOthers(data);
  }
  return (
    <>
      {others?.map((item, index) => (
             <div key={item.id} className="flex flex-wrap items-center justify-between">
             <div className="w-11/12">
               <div className="mb-4">
                 <div className="mb-2 block">
                   <Label htmlFor="otherUrl" value="Gambar (URL)" />
                 </div>
                 <TextInput
                   id="otherUrl"
                   type="text"
                   value={item?.name}
                   placeholder="https://example.com/other.png"
                 />
               </div>
             </div>
             <div className="w-1/12 text-right">
             <button
                  type="button"
                  className="text-red-500 hover:text-red-700 mt-4"
                  id={`${item.id}`}
                  onClick={() => handleTrash(item.id)}
                >
                  <HiOutlineTrash className="h-5 w-5" />
                </button>
             </div>
           </div>
      ))}

      <button type="button" className="btnSecondary mt-2" onClick={handleothers}>
        Tambah Gambar Lainnya
      </button>
    </>
  );
}
