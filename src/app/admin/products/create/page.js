'use client'

import { Label, TextInput, Textarea } from "flowbite-react";
import ContentAdmin from "@/components/layout/admin/content"
import Card from "@/components/card/default";
import Models from "@/app/admin/products/components/addModel"
import Colors from "@/app/admin/products/components/addColor"
import Featured from "@/app/admin/products/components/addFeatured"
import Interiors from "@/app/admin/products/components/addInterior"
import Exteriors from "@/app/admin/products/components/addExterior"
import Others from "@/app/admin/products/components/addOther"
import { useState } from "react";



export default  function Page() {
const [inputs, setInputs] = useState('')

function handleChange(e){
  setInputs(...inputs, e.target.value)
}

  return (
    <ContentAdmin title={`Form Tambah Tipe`}>
      <form action="">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="col-span-full md:col-span-8">
            <Card className="px-6">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Informasi Type</h6>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="typeName" value="Nama Type" />
                  </div>
                  <TextInput
                    id="typeName"
                    type="text"
                    value={inputs}
                    placeholder="Honda Brio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="typeDesc" value="Deskrispi" />
                  </div>
                  <Textarea
                    id="typeDesc"
                    placeholder="Deskripsi"
                    value={inputs}
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="typeImage" value="Foto Type (URL)" />
                  </div>
                  <TextInput
                    id="typeImage"
                    type="text"
                    value={inputs}
                    placeholder="https://example.com/honda_brio.png"
                    onChange={handleChange}
                  />
                </div>
              </Card.Body>
            </Card>

            <Card className="px-4 md:px-6 mt-5">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Informasi Model</h6>
              </Card.Header>
              <Card.Body>
                <Models />
              </Card.Body>
            </Card>
            <Card className="px-4 md:px-6 mt-5">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Informasi Warna</h6>
              </Card.Header>
              <Card.Body>
                <Colors />
              </Card.Body>
            </Card>
            <Card className="px-4 md:px-6 mt-5">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Informasi Featured</h6>
              </Card.Header>
              <Card.Body>
              <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="featuredTitle" value="Judul" />
                  </div>
                  <TextInput
                    id="featuredTitle"
                    type="text"
                    value={inputs}
                    placeholder="Perjalanan Aman"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="featuredSubTitle" value="Sub Judul"/>
                  </div>
                  <Textarea
                    id="featuredSubTitle"
                    placeholder="Nikmati perjalanan anda...."
                    value={inputs}
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
                <Featured />
              </Card.Body>
            </Card>
            <Card className="px-4 md:px-6 mt-5">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Interiors</h6>
              </Card.Header>
              <Card.Body>
              <div className="mb-4">
                 <div className="mb-2 block">
                   <Label htmlFor="interiorUrl" value="Gambar (URL)" />
                 </div>
                 <TextInput
                   id="interiorUrl"
                   type="text"
                   value={inputs}
                   placeholder="https://example.com/interior.png"
                   onChange={handleChange}
                 />
               </div>
                <Interiors />
              </Card.Body>
            </Card>
            <Card className="px-4 md:px-6 mt-5">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Exterior</h6>
              </Card.Header>
              <Card.Body>
              <div className="mb-4">
                 <div className="mb-2 block">
                   <Label htmlFor="exteriorUrl" value="Gambar (URL)" />
                 </div>
                 <TextInput
                   id="exteriorUrl"
                   type="text"
                   value={inputs}
                   placeholder="https://example.com/exterior.png"
                   onChange={handleChange}
                 />
               </div>
                <Exteriors />
              </Card.Body>
            </Card>
            <Card className="px-4 md:px-6 mt-5">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Lainnya</h6>
              </Card.Header>
              <Card.Body>
              <div className="mb-4">
                 <div className="mb-2 block">
                   <Label htmlFor="otherUrl" value="Gambar (URL)" />
                 </div>
                 <TextInput
                   id="otherUrl"
                   type="text"
                   value={inputs}
                   placeholder="https://example.com/other.png"
                   onChange={handleChange}
                 />
               </div>
                <Others />
              </Card.Body>
            </Card>
          </div>
          <div className="col-span-full md:col-span-4">
            <Card className="px-6">
              <Card.Header>
                <h6 className="mb-8 font-semibold">Meta Data</h6>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaTitle" value="Title" />
                  </div>
                  <TextInput
                    id="metaTitle"
                    type="text"
                    value={inputs}
                    placeholder="Honda Brio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaDesc" value="Deskripsi"/>
                  </div>
                  <Textarea
                    id="metaDesc"
                    placeholder="Honda Brio Diskon ...."
                    value={inputs}
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaKeyword" value="Keyword" />
                  </div>
                  <TextInput
                    id="metaKeyword"
                    type="text"
                    value={inputs}
                    placeholder="Honda Brio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaImage" value="Foto Type (URL)" />
                  </div>
                  <TextInput
                    id="metaImage"
                    type="text"
                    value={inputs}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full divide-x-2 divide-slate-500"></div>
                <h6 className="py-8 font-semibold">OpenGraph</h6>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaTitle" value="Title" />
                  </div>
                  <TextInput
                    id="metaTitle"
                    type="text"
                    value={inputs}
                    placeholder="Honda Brio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaDesc" value="Deskripsi"/>
                  </div>
                  <Textarea
                    id="metaDesc"
                    placeholder="Honda Brio Diskon ...."
                    value={inputs}
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaKeyword" value="Keyword" />
                  </div>
                  <TextInput
                    id="metaKeyword"
                    type="text"
                    value={inputs}
                    placeholder="Honda Brio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="metaImage" value="Foto Type (URL)" />
                  </div>
                  <TextInput
                    id="metaImage"
                    type="text"
                    value={inputs}
                    onChange={handleChange}
                  />
                </div>
                <button className="btnPrimary w-full">Simpan</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </form>
    </ContentAdmin>
  );
}
