import React from "react";
import ProductsForm from "../(admin-components)/products-form";
import UpdateProductsForm from "../(admin-components)/update-products-form";
import { getCoursesById } from "@/actions/postCourses";

interface paramsDataProps {
  params : {
    courseId: string,
  }
}

const Page: React.FC<paramsDataProps> = async ({ params }) => {

  const courseId = params.courseId

  const data = await getCoursesById(courseId)
  return (
    <div>
      <div>
        <UpdateProductsForm data={data} />
      </div>
    </div>
  );
};

export default Page;
