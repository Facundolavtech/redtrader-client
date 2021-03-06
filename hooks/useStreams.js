import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLiveStreams, getStreamsInfo } from "../services/streams";

const useStreams = (token) => {
  const [liveStreams, setLiveStreams] = useState(null);
  const router = useRouter();

  useEffect(async () => {
    const getStreams = await getLiveStreams();

    if (Object.keys(getStreams).length > 0) {
      const response = await getStreamsInfo(getStreams, token);

      if (response.status === 200) {
        setLiveStreams(response.streams);
      } else {
        router.push("/dashboard");
        toast.error("Ocurrio un error al cargar los educadores");
      }
    } else {
      setLiveStreams([]);
    }
  }, []);

  return {
    liveStreams,
  };
};

export default useStreams;
