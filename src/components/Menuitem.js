

const Menuitem = (props) => {
    const { name ,subMenus }  = props;
  return (
    <li>
    <a className="menu-item">
        <div className="menu-icon">
         <i class="bi bi-tags"></i> 
            </div>
    </a> 
    {
        subMenus && subMenus.length > 0 ?(
    
    <ul className="sub-menu">
        {subMenus.map((menu, index) =>(
            <li key={index}>
                <a>{menu.name}</a>
            </li>

        ))}
       
          
    </ul>
        ) : null}
</li>
  )
}

export default Menuitem
