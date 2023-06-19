// package
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component
import selectIcon from "./icon";

// style
import { IconBox } from "./style";

interface IProps {
  model: string;
}

export default function Icon<IProps>({model}) {
  return (
    <IconBox>
      <FontAwesomeIcon icon={selectIcon(model) as IconProp} />
    </IconBox>
  )
}
