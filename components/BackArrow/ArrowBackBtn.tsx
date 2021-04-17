import { ArrowBack } from "@material-ui/icons";
import { useRouter } from "next/router";

const ArrowBackBtn = ({ src }) => {
  const router = useRouter();

  const goBack = (src) => {
    router.push(src);
  };

  return (
    <span className="arrowback__btn" onClick={() => goBack(src)}>
      <ArrowBack />
    </span>
  );
};

export default ArrowBackBtn;
