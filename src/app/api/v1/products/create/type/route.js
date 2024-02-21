import { prisma } from "@/lib/client";
import { PrismaClient, Prisma } from "@prisma/client";
import slugify from "react-slugify";

export async function POST(req) {
  const item = await req.json();
  // console.log(item)

  let dataModel = [];
  let dataColor = [];
  let dataFeatured = [];
  let dataImage = [];
  item.models.map((i) => {
    dataModel.push({
      name: i.modelName,
      price: i.modelPrice,
    });
  });
  item.colors.map((i) => {
    dataColor.push({
      name: i.colorName,
      image: i.colorImage,
    });
  });
  item.featureds.map((i) => {
    dataFeatured.push({
      title: i.featuredContentTitle,
      desc: i.featuredContentDesc,
    });
  });
  item.interiors.map((i) => {
    dataImage.push({
      image: i.interiorImageUrl,
      category: "interior",
    });
  });
  item.exteriors.map((i) => {
    dataImage.push({
      image: i.exteriorImageUrl,
      category: "exterior",
    });
  });
  item.others.map((i) => {
    dataImage.push({
      image: i.otherImageUrl,
      category: "other",
    });
  });

  try {
    await prisma.$transaction(async (tx) => {
      // Code running in a transaction...
      const createProduct = await tx.type.create({
        data: {
          name: item.typeName,
          desc: item.typeDesc,
          image: item.typeImage,
          slug: slugify(item.typeName),
          // models: {
          //   createMany: {
          //     data: dataModel,
          //   },
          // },
          // colors: {
          //   createMany: {
          //     data: dataColor,
          //   },
          // },
          // featureds: {
          //   create: {
          //     title: item.featuredTitle,
          //     desc: item.featuredSubTitle,
          //     lists: {
          //       createMany: {
          //         data: dataFeatured,
          //       },
          //     },
          //   },
          // },
          // images: {
          //   createMany: {
          //     data: dataImage,
          //   },
          // },
        },
      });
      //   const createMeta = await tx.meta.create({
      //     data:{
      //       slug : slugify(item.typeName),
      //       category : "product",
      //       meta_title : item.metaTitle ,
      //       meta_desc : item.metaDesc   ,
      //       meta_keyword : item.metaKeyword,
      //       meta_image :  item.metaImage,
      //       og_title : item.opengraphTitle,
      //       og_desc : item.opengraphDesc,
      //       og_keyword : item.opengraphKeyword,
      //       og_image : item.opengraphImage

      //     }
      // })
    });
    return Response.json({
      code: "201",
      status: "success",
      message: "created successfully",
      data: dataModel
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return Response.json({
          code: "400",
          status: "error",
          message: "Nama type telah digunakan!",
          data: e
        });
      }else{
        return Response.json({
          code: "400",
          status: "error",
          message : e.message,
          data: e
        });
      }
    }
    if (e instanceof Prisma.PrismaClientValidationError) {
      return Response.json({
        code: "400",
        status: "error",
        message: e.message,
        data: e,
      });
    }
    throw e;
  }
  
 
}
