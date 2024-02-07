"use client";
import Card from "@/components/card/default"
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useState } from "react";


let nextID = 1;

export default function Featured() {
  const [featured, setFeatured] = useState([]);
  function handleFeatured() {
    setFeatured([...featured, { id: nextID++ }]);
  }

  function handleTrash(id) {
    const data = featured.filter((item) => {
      return item.id !== id;
    });
    setFeatured(data);
  }
  return (
    <>
      {featured?.map((item, index) => (
        <Card key={item?.id} className="mb-4">
          <Card.Header>
            <div className="flex justify-between">
              <p className="font-semibold mb-2">Featured {index + 1}</p>
              
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  id={`${item.id}`}
                  onClick={() => handleTrash(item.id)}
                >
                  <HiOutlineTrash className="h-5 w-5" />
                </button>
              
            </div>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="featuredName" value="title" />
                  </div>
                  <TextInput
                    id="featuredName"
                    type="text"
                    value={item?.name}
                    placeholder="Teknologi Terkini"
                  />
                </div>
              </div>
              <div className="w-full">
              <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="featuredDesc" value="Deskripsi" />
                  </div>
                  <Textarea
                    id="featuredDesc"
                    placeholder="Teknologi Anti Ketinggalan"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}

      <button type="button" className="btnSecondary mt-2" onClick={handleFeatured}>
        Tambah Featured
      </button>
    </>
  );
}
