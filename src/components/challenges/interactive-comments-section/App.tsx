import { useStore } from "@nanostores/react";
import CommentList from "./CommentList";
import { commentTree } from "./Store";

type Props = {
  src: string;
};

function App({ src }: Props) {
  const $commentTree = useStore(commentTree);

  return <CommentList commentTree={$commentTree} src={src} />;
}

export default App;
