import AdminCourses from "../(admin-components)/course-post-products";
import { getCourses } from "@/actions/postCourses";

const CoursePosts = async () => {
  const data = await getCourses()
  return (
    <div>
      <div>
        <AdminCourses data={data}/>
      </div>
    </div>
  );
};

export default CoursePosts;
