import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import selectIcon from "./icon";
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
