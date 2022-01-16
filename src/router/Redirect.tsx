import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type RedirectProps = {
  to: string;
  replace?: boolean;
}

export default function Redirect({ to, replace = false }: RedirectProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  });

  return (<></>);
}
