export function Tabbuttons({children,onSelect,highlight}){
    return(
        <li><button className={highlight ? 'active':undefined} onClick={onSelect}>{children}</button></li>
    )
}