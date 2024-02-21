"use client";
import { Label, TextInput } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi2";
import Card from "@/components/card/default";
import { useState } from "react";
import { Field, FieldArray, Form, FormikErrors, FormikProps, withFormik } from "formik";

let nextID = 1;

export default function Models({test}) {
  console.log(test)
  const [varian, setVarian] = useState([]);
  function handleVarian() {
    setVarian([...varian, { id: nextID++ }]);
  }

  function handleTrash(id) {
    const varians = varian.filter((item) => {
      return item.id !== id;
    });
    setVarian(varians);
  }
  return (
    <>
      {varian?.map((item, index) => (
        <Card key={item?.id} className="mb-4">
          <Card.Header>
            <div className="flex justify-between">
              <p className="font-semibold mb-2">Model {index + 1}</p>
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
              <div className="w-full md:w-7/12 md:pe-4">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="modelName" value="Nama model" />
                  </div>
                  <TextInput
                    id="modelName"
                    type="text"
                    value={item?.name}
                    placeholder="Honda Brio ST"
                  />
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="priceModel" value="Harga" />
                  </div>
                  <TextInput
                    id="priceModel"
                    type="text"
                    value={item?.price}
                    placeholder="195.xxx.xxx"
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}

      <button type="button" className="btnSecondary mt-2" onClick={handleVarian}>
        Tambah Model
      </button>
    </>
  );
}
