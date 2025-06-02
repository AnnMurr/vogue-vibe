import { Icon, TopModuleBlock } from "./styledItem";

export const Item = ({ name, iconClass }) => {
    return (
        <TopModuleBlock>
            <Icon>
                <i class={iconClass}></i>
            </Icon>
            <span>{name}</span>
        </TopModuleBlock>
    )
}