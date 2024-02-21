"use client";

import { Label, TextInput, Textarea } from "flowbite-react";
import ContentAdmin from "@/components/layout/admin/content";
import Card from "@/components/card/default";
import {Alert} from "@/components/alert/index";
import { HiOutlineTrash } from "react-icons/hi2";
import CreatableSelect from "react-select/creatable";
import { FieldArray, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { SelectMultiple } from "../components/selecMultiple";

const formSchema = yup.object({
  typeName: yup.string().required("Harap masukan nama type"),
  typeDesc: yup
    .string()
    .min(30, "Minimal 30 karakter")
    .max(300, "Maksimal 300 karakter")
    .required("Harap masukan deskripsi type"),
  typeImage: yup.string().required("Harap masukan url image type"),
  // models: yup.array().of(
  //   yup.object().shape({
  //     modelName: yup
  //       .string("Nama model harus berupa string")
  //       .required("Harap masukan nama model"),
  //     modelPrice: yup
  //       .number("Harga harus berpa angka")
  //       .positive("Harga tidak boleh angka negatif")
  //       .required("Harap masukan harga model"),
  //   })
  // ),
  // colors: yup.array().of(
  //   yup.object().shape({
  //     colorName: yup
  //       .string("Nama warna harus berupa string")
  //       .required("Harap masukan nama warna"),
  //     colorImage: yup.string().required("Harap masukan url image"),
  //   })
  // ),
  // featuredTitle: yup.string().required("Harap masukan judul featured"),
  // featuredSubTitle: yup.string().required("Harap masukan deskripsi"),
  // featureds: yup.array().of(
  //   yup.object().shape({
  //     featuredContentTitle: yup
  //       .string("Judul harus berupa string")
  //       .required("Harap masukan judul kontent"),
  //     featuredContentDesc: yup.string().required("Harap masukan deskripsi"),
  //   })
  // ),
  // interiors: yup.array().of(
  //   yup.object().shape({
  //     interiorImageUrl: yup
  //       .string("Url image harus berupa string")
  //       .required("Harap masukan url image"),
  //   })
  // ),
  // exteriors: yup.array().of(
  //   yup.object().shape({
  //     exteriorImageUrl: yup
  //       .string("Url image harus berupa string")
  //       .required("Harap masukan url image"),
  //   })
  // ),
  // others: yup.array().of(
  //   yup.object().shape({
  //     otherImageUrl: yup
  //       .string("Url image harus berupa string")
  //       .required("Harap masukan url image"),
  //   })
  // ),
  metaTitle: yup.string("Harap masukan berupa string"),
  metaDesc: yup.string("Harap masukan berupa string"),
  metaKeyword: yup.string("Harap masukan berupa string"),
  metaImage: yup.string("Harap masukan berupa string"),
  opengraphTitle: yup.string("Harap masukan berupa string"),
  opengraphDesc: yup.string("Harap masukan berupa string"),
  opengraphKeyword: yup.string("Harap masukan berupa string"),
  opengraphImage: yup.string("Harap masukan berupa string"),
});

export default function Page() {
  const [error, setError] = useState("");
  return (
    <ContentAdmin title={``}>
      <Formik
        initialValues={{
          typeName: "",
          typeDesc: "",
          typeImage: "",
          models: [
            {
              modelName: "",
              modelPrice: 0,
            },
          ],
          colors: [
            {
              colorName: "",
              colorImage: "",
            },
          ],
          featuredTitle: "",
          featuredSubTitle: "",
          featureds: [
            {
              featuredContentTitle: "",
              featuredContentDesc: "",
            },
          ],
          interiors: [
            {
              interiorImageUrl: "",
            },
          ],
          exteriors: [
            {
              exteriorImageUrl: "",
            },
          ],
          others: [
            {
              otherImageUrl: "",
            },
          ],
          metaTitle: "",
          metaDesc: "",
          metaKeyword: "",
          metaImage: "",
          opengraphTitle: "",
          opengraphDesc: "",
          opengraphKeyword: "",
          opengraphImage: "",
        }}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          const res = await fetch("/api/v1/products/create/type", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          const data = await res.json();
          if (data.status === "error") {
            if (data.data.code === "P2002") {
              setError(data.message);
            } else {
              setError(data.message);
              console.log(data.message);
            }
          } else {
            setError("");
          }
        }}
      >
        {({ values, isSubmitting, isValid, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center min-h-screen -mt-14">
              <div className="w-full md:w-8/12">
                <Card className="px-6">
                  <Card.Header>
                    <h6 className="mb-8 font-semibold">Tambah Type Mobil</h6>
                    {error && (
                      <Alert
                        color="red"
                        message={error}
                      />
                    )}
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="typeName" value="Nama Type" />
                      </div>
                      <TextInput
                        id="typeName"
                        name="typeName"
                        type="text"
                        placeholder="Honda Brio"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.typeName}
                      />
                      <ErrorMessage
                        name="typeName"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="typeDesc" value="Deskrispi" />
                      </div>
                      <Textarea
                        id="typeDesc"
                        placeholder="Deskripsi"
                        rows={4}
                        name="typeDesc"
                        onChange={handleChange}
                        value={values.typeDesc}
                      />
                      <ErrorMessage
                        name="typeDesc"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-6">
                      <div className="mb-2 block">
                        <Label htmlFor="typeImage" value="Foto Type (URL)" />
                      </div>
                      <TextInput
                        id="typeImage"
                        name="typeImage"
                        type="text"
                        placeholder="https://example.com/honda_brio.png"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.typeImage}
                      />
                      <ErrorMessage
                        name="typeImage"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="btnPrimary"
                        disabled={isSubmitting | !isValid ? true : false}
                      >
                        {isSubmitting ? "Menyimpan..." : "Simpan"}
                      </button>
                    </div>
                  </Card.Body>
                </Card>

                {/* <Card className="px-4 md:px-6 mt-5">
                  <Card.Header>
                    <h6 className="mb-8 font-semibold">Informasi Model</h6>
                  </Card.Header>
                  <Card.Body>
                    <FieldArray
                      name="models"
                      render={(arrayHelpers) => (
                        <>
                          {values.models && values.models.length > 0
                            ? values.models.map((model, index) => (
                                <Card key={index} className="mb-4">
                                  <Card.Header>
                                    <div className="flex justify-between">
                                      <p className="font-semibold mb-2">
                                        Model {index + 1}
                                      </p>
                                      {index > 0 && (
                                        <button
                                          type="button"
                                          className="text-red-500 hover:text-red-700"
                                          onClick={() =>
                                            arrayHelpers.remove(index)
                                          }
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
                                            <Label
                                              htmlFor={`models.${index}.modelName`}
                                              value="Nama model"
                                            />
                                          </div>
                                          <TextInput
                                            id={`models.${index}.modelName`}
                                            name={`models.${index}.modelName`}
                                            type="text"
                                            placeholder="Honda Brio ST"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={
                                              values.models[index].modelName
                                            }
                                          />
                                          <ErrorMessage
                                            name={`models.${index}.modelName`}
                                            component="span"
                                            className="text-sm text-red-600"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full md:w-5/12">
                                        <div className="mb-4">
                                          <div className="mb-2 block">
                                            <Label
                                              htmlFor={`models.${index}.modelPrice`}
                                              value="Harga"
                                            />
                                          </div>
                                          <TextInput
                                            id={`models.${index}.modelPrice`}
                                            name={`models.${index}.modelPrice`}
                                            type="number"
                                            placeholder="195.xxx.xxx"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={
                                              values.models[index].modelPrice
                                            }
                                          />
                                          <ErrorMessage
                                            name={`models.${index}.modelPrice`}
                                            component="span"
                                            className="text-sm text-red-600"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              ))
                            : null}

                          <button
                            type="button"
                            className="btnSecondary mt-2"
                            onClick={() =>
                              arrayHelpers.push({
                                modelName: "",
                                modelPrice: "",
                              })
                            }
                          >
                            Tambah Model
                          </button>
                        </>
                      )}
                    />
                  </Card.Body>
                </Card>

                <Card className="px-4 md:px-6 mt-5">
                  <Card.Header>
                    <h6 className="mb-8 font-semibold">Informasi Warna</h6>
                  </Card.Header>
                  <Card.Body>
                    <FieldArray
                      name="colors"
                      render={(arrayHelpers) => (
                        <>
                          {values.colors && values.colors.length > 0
                            ? values.colors.map((color, index) => (
                                <Card key={index} className="mb-4">
                                  <Card.Header>
                                    <div className="flex justify-between">
                                      <p className="font-semibold mb-2">
                                        Warna {index + 1}
                                      </p>
                                      {index > 0 && (
                                        <button
                                          type="button"
                                          className="text-red-500 hover:text-red-700"
                                          onClick={() =>
                                            arrayHelpers.remove(index)
                                          }
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
                                            <Label
                                              htmlFor={`colors.${index}.colorName`}
                                              value="Nama Warna"
                                            />
                                          </div>
                                          <TextInput
                                            id={`colors.${index}.colorName`}
                                            name={`colors.${index}.colorName`}
                                            type="text"
                                            value={
                                              values.colors[index].colorName
                                            }
                                            autoComplete="off"
                                            placeholder="Rose Gold"
                                            onChange={handleChange}
                                          />
                                          <ErrorMessage
                                            name={`colors.${index}.colorName`}
                                            component="span"
                                            className="text-sm text-red-600"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full md:w-8/12">
                                        <div className="mb-4">
                                          <div className="mb-2 block">
                                            <Label
                                              htmlFor={`colors.${index}.colorImage`}
                                              value="Gambar (URL)"
                                            />
                                          </div>
                                          <TextInput
                                            id={`colors.${index}.colorImage`}
                                            name={`colors.${index}.colorImage`}
                                            type="text"
                                            value={
                                              values.colors[index].colorImage
                                            }
                                            autoComplete="off"
                                            placeholder="https://example.com/car.png"
                                            onChange={handleChange}
                                          />
                                          <ErrorMessage
                                            name={`colors.${index}.colorImage`}
                                            component="span"
                                            className="text-sm text-red-600"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              ))
                            : null}
                          <button
                            type="button"
                            className="btnSecondary mt-2"
                            onClick={() =>
                              arrayHelpers.push({
                                colorName: "",
                                colorImage: "",
                              })
                            }
                          >
                            Tambah Warna
                          </button>
                        </>
                      )}
                    />
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
                        placeholder="Perjalanan Aman"
                        autoComplete="off"
                        value={values.featuredTitle}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name={`featuredTitle`}
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="featuredSubTitle" value="Sub Judul" />
                      </div>
                      <Textarea
                        id="featuredSubTitle"
                        placeholder="Nikmati perjalanan anda...."
                        rows={4}
                        value={values.featuredSubTitle}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name={`featuredSubTitle`}
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <FieldArray
                      name="featureds"
                      render={(arrayHelpers) => (
                        <>
                          {values.featureds && values.featureds.length > 0
                            ? values.featureds.map((featured, index) => (
                                <Card key={index} className="mb-4">
                                  <Card.Header>
                                    <div className="flex justify-between">
                                      <p className="font-semibold mb-2">
                                        Featured {index + 1}
                                      </p>

                                      <button
                                        type="button"
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
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
                                            <Label
                                              htmlFor={`featureds.${index}.featuredContentTitle`}
                                              value="title"
                                            />
                                          </div>
                                          <TextInput
                                            id={`featureds.${index}.featuredContentTitle`}
                                            name={`featureds.${index}.featuredContentTitle`}
                                            type="text"
                                            value={
                                              values.featureds[index]
                                                .featuredContentTitle
                                            }
                                            autoComplete="off"
                                            placeholder="Semakin Nyaman"
                                            onChange={handleChange}
                                          />
                                          <ErrorMessage
                                            name={`featureds.${index}.featuredContentTitle`}
                                            component="span"
                                            className="text-sm text-red-600"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full">
                                        <div className="mb-4">
                                          <div className="mb-2 block">
                                            <Label
                                              htmlFor={`featureds.${index}.featuredContentDesc`}
                                              value="Deskripsi"
                                            />
                                          </div>
                                          <Textarea
                                            id={`featureds.${index}.featuredContentDesc`}
                                            name={`featureds.${index}.featuredContentDesc`}
                                            placeholder="Teknologi Anti Ketinggalan"
                                            type="text"
                                            rows={4}
                                            value={
                                              values.featureds[index]
                                                .featuredContentDesc
                                            }
                                            onChange={handleChange}
                                          />
                                          <ErrorMessage
                                            name={`featureds.${index}.featuredContentDesc`}
                                            component="span"
                                            className="text-sm text-red-600"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              ))
                            : null}
                          <button
                            type="button"
                            className="btnSecondary mt-2"
                            onClick={() =>
                              arrayHelpers.push({
                                featuredContenTitle: "",
                                featuredContenDesc: "",
                              })
                            }
                          >
                            Tambah Featured
                          </button>
                        </>
                      )}
                    />
                  </Card.Body>
                </Card>

                <Card className="px-4 md:px-6 mt-5">
                  <Card.Header>
                    <h6 className="mb-8 font-semibold">Interiors</h6>
                  </Card.Header>
                  <Card.Body>
                    <FieldArray
                      name="interiors"
                      render={(arrayHelpers) => (
                        <>
                          {values.interiors && values.interiors.length > 0
                            ? values.interiors.map((interior, index) => (
                                <div
                                  key={index}
                                  className="flex flex-wrap items-center justify-between"
                                >
                                  <div
                                    className={`${
                                      index === 0 ? "w-full" : "w-11/12"
                                    } `}
                                  >
                                    <div className="mb-4">
                                      <div className="mb-2 block">
                                        <Label
                                          htmlFor={`interiors.${index}.interiorImageUrl`}
                                          value={`Gambar (URL) ${
                                            values.interiors.length === 1
                                              ? ""
                                              : index + 1
                                          }`}
                                        />
                                      </div>
                                      <TextInput
                                        id={`interiors.${index}.interiorImageUrl`}
                                        name={`interiors.${index}.interiorImageUrl`}
                                        type="text"
                                        placeholder="https://example.com/interior.png"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={
                                          values.interiors[index]
                                            .InteriorImageUrl
                                        }
                                      />
                                      <ErrorMessage
                                        name={`interiors[${index}].interiorImageUrl`}
                                        component="span"
                                        className="text-sm text-red-600"
                                      />
                                    </div>
                                  </div>
                                  {index !== 0 && (
                                    <div className="w-1/12 text-right">
                                      <button
                                        type="button"
                                        className="text-red-500 hover:text-red-700 mt-4"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        <HiOutlineTrash className="h-5 w-5" />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              ))
                            : null}
                          <button
                            type="button"
                            className="btnSecondary mt-2"
                            onClick={() =>
                              arrayHelpers.push({ interiorImageUrl: "" })
                            }
                          >
                            Tambah Interior
                          </button>
                        </>
                      )}
                    />
                  </Card.Body>
                </Card>

                <Card className="px-4 md:px-6 mt-5">
                  <Card.Header>
                    <h6 className="mb-8 font-semibold">Exteriors</h6>
                  </Card.Header>
                  <Card.Body>
                    <FieldArray
                      name="exteriors"
                      render={(arrayHelpers) => (
                        <>
                          {values.exteriors && values.exteriors.length > 0
                            ? values.exteriors.map((interior, index) => (
                                <div
                                  key={index}
                                  className="flex flex-wrap items-center justify-between"
                                >
                                  <div
                                    className={`${
                                      index === 0 ? "w-full" : "w-11/12"
                                    } `}
                                  >
                                    <div className="mb-4">
                                      <div className="mb-2 block">
                                        <Label
                                          htmlFor={`exteriors.${index}.exteriorImageUrl`}
                                          value={`Gambar (URL) ${
                                            values.exteriors.length === 1
                                              ? ""
                                              : index + 1
                                          }`}
                                        />
                                      </div>
                                      <TextInput
                                        id={`exteriors.${index}.exteriorImageUrl`}
                                        name={`exteriors.${index}.exteriorImageUrl`}
                                        type="text"
                                        placeholder="https://example.com/exterior.png"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={
                                          values.exteriors[index]
                                            .exteriorImageUrl
                                        }
                                      />
                                      <ErrorMessage
                                        name={`exteriors[${index}].exteriorImageUrl`}
                                        component="span"
                                        className="text-sm text-red-600"
                                      />
                                    </div>
                                  </div>
                                  {index !== 0 && (
                                    <div className="w-1/12 text-right">
                                      <button
                                        type="button"
                                        className="text-red-500 hover:text-red-700 mt-4"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        <HiOutlineTrash className="h-5 w-5" />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              ))
                            : null}
                          <button
                            type="button"
                            className="btnSecondary mt-2"
                            onClick={() =>
                              arrayHelpers.push({ exteriorImageUrl: "" })
                            }
                          >
                            Tambah Exterior
                          </button>
                        </>
                      )}
                    />
                  </Card.Body>
                </Card>

                <Card className="px-4 md:px-6 mt-5">
                  <Card.Header>
                    <h6 className="mb-8 font-semibold">Gambar Lainnya</h6>
                  </Card.Header>
                  <Card.Body>
                    <FieldArray
                      name="others"
                      render={(arrayHelpers) => (
                        <>
                          {values.others && values.others.length > 0
                            ? values.others.map((interior, index) => (
                                <div
                                  key={index}
                                  className="flex flex-wrap items-center justify-between"
                                >
                                  <div
                                    className={`${
                                      index === 0 ? "w-full" : "w-11/12"
                                    } `}
                                  >
                                    <div className="mb-4">
                                      <div className="mb-2 block">
                                        <Label
                                          htmlFor={`others.${index}.otherImageUrl`}
                                          value={`Gambar (URL) ${
                                            values.others.length === 1
                                              ? ""
                                              : index + 1
                                          }`}
                                        />
                                      </div>
                                      <TextInput
                                        id={`others.${index}.otherImageUrl`}
                                        name={`others.${index}.otherImageUrl`}
                                        type="text"
                                        placeholder="https://example.com/other.png"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={
                                          values.others[index].otherImageUrl
                                        }
                                      />
                                      <ErrorMessage
                                        name={`others[${index}].otherImageUrl`}
                                        component="span"
                                        className="text-sm text-red-600"
                                      />
                                    </div>
                                  </div>
                                  {index !== 0 && (
                                    <div className="w-1/12 text-right">
                                      <button
                                        type="button"
                                        className="text-red-500 hover:text-red-700 mt-4"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        <HiOutlineTrash className="h-5 w-5" />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              ))
                            : null}
                          <button
                            type="button"
                            className="btnSecondary mt-2"
                            onClick={() =>
                              arrayHelpers.push({ otherImageUrl: "" })
                            }
                          >
                            Tambah Gambar Lainnya
                          </button>
                        </>
                      )}
                    />
                  </Card.Body>
                </Card> */}

                {/* <div className="col-span-full md:col-span-4">
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
                        name="metaTitle"
                        type="text"
                        placeholder="Honda Brio"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.metaTitle}
                      />
                      <ErrorMessage
                        name="metaTitle"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="metaDesc" value="Deskripsi" />
                      </div>
                      <Textarea
                        id="metaDesc"
                        name="metaDesc"
                        placeholder="Honda Brio Diskon ...."
                        rows={4}
                        onChange={handleChange}
                        value={values.metaDesc}
                      />
                      <ErrorMessage
                        name="metaDesc"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="metaKeyword" value="Keyword" />
                      </div>
                      <TextInput
                        id="metaKeyword"
                        name="metaKeyword"
                        type="text"
                        placeholder="Pisahkan dengan koma"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.metaKeyword}
                      />
                      <ErrorMessage
                        name="metaKeyword"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="metaImage" value="Foto Type (URL)" />
                      </div>
                      <TextInput
                        id="metaImage"
                        name="metaImage"
                        type="text"
                        autoComplete="off"
                        placeholder="https://image.jpg"
                        onChange={handleChange}
                        value={values.metaImage}
                      />
                      <ErrorMessage
                        name="metaImage"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="w-full divide-x-2 divide-slate-500"></div>
                    <h6 className="py-8 font-semibold">OpenGraph</h6>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="opengraphTitle" value="Title" />
                      </div>
                      <TextInput
                        id="opengraphTitle"
                        name="opengraphTitle"
                        type="text"
                        placeholder="Honda Brio"
                        autoComplete="off"
                        value={values.opengraphTitle}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="opengraphTitle"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="opengraphDesc" value="Deskripsi" />
                      </div>
                      <Textarea
                        id="opengraphDesc"
                        name="opengraphDesc"
                        placeholder="Honda Brio Diskon ...."
                        value={values.opengraphDesc}
                        onChange={handleChange}
                        rows={4}
                      />
                      <ErrorMessage
                        name="opengraphDesc"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label htmlFor="opengraphKeyword" value="Keyword" />
                      </div>
                      <TextInput
                        id="opengraphKeyword"
                        name="opengraphKeyword"
                        type="text"
                        placeholder="Pisahkan dengan koma"
                        autoComplete="off"
                        value={values.opengraphKeyword}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="opengraphKeyword"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="opengraphImage"
                          value="Foto Type (URL)"
                        />
                      </div>
                      <TextInput
                        id="opengraphImage"
                        name="opengraphImage"
                        type="text"
                        placeholder="https://image.png"
                        autoComplete="off"
                        value={values.opengraphImage}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="opengraphImage"
                        component="span"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <button type="submit" className="btnPrimary w-full" disabled={isSubmitting | !isValid ? true : false}>
                      {isSubmitting ? 'Menyimpan...' : 'Simpan'}
                    </button>
                    </Card.Body>
                    </Card>
                  </div> */}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </ContentAdmin>
  );
}
