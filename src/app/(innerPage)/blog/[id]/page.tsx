import Details from "@/components/blog/Details";
import Customer from "@/components/home3/Customer";
import SectionTop from "@/components/shared/SectionTop";
import NotFound from "../../../404";

interface Params {
  id: string;
}
const BlogDetails = async ({ params }: { params: Params }) => {
  console.log(params.id)
  return (
    <>
      {
        params.id ?
          <>
            <SectionTop title="Blog Details" />
            <Details id={params.id} />
            <Customer />
          </>
          :
          <NotFound />
      }

    </>
  );
};


export default BlogDetails;
