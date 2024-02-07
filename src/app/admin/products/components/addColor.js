"use client";
import { Label, TextInput } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi2";
import Card from "@/components/card/default";
import { useState } from "react";


let nextID = 1;

export default function Colors() {
  const [colors, setColors] = useState([]);
  function handleColors() {
    setColors([...colors, { id: nextID++ }]);
  }

  function handleTrash(id) {
    const data = colors.filter((item) => {
      return item.id !== id;
    });
    setColors(data);
  }
  return (
    <>
      {colors?.map((item, index) => (
        <Card key={item?.id} className="mb-4">
          <Card.Header>
            <div className="flex justify-between">
              <p className="font-semibold mb-2">Warna {index + 1}</p>
              {index > 0 && (
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  id={`${item.id}`}
                  onClick={() => handleTrash(item.id)}
                >
                  <HiOutlineTrash className="h-5 w-5" />
                </button>
              )}
            </div>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 md:pe-4">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="colorName" value="Nama Warna" />
                  </div>
                  <TextInput
                    id="colorName"
                    type="text"
                    value={item?.name}
                    placeholder="Rose Gold"
                  />
                </div>
              </div>
              <div className="w-full md:w-8/12">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="colorUrl" value="Gambar (URL)" />
                  </div>
                  <TextInput
                    id="colorUrl"
                    type="text"
                    value={item?.price}
                    placeholder="https://example.com/car.png"
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}

      <button type="button" className="btnSecondary mt-2" onClick={handleColors}>
        Tambah Warna
      </button>
    </>
  );
}
