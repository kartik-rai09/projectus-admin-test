const CategoryCard = ({children}) => {
    return (
        <div className="flex justify-between items-center mx-[2px] mt-[5px] h-[30px] bg-[#E7E7E7] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]">
            <span className="text-[13px]">{children}</span>
            <img src="/Images/CategoryCross.png" alt="cross" className="w-[10px] h-[10px]" />
        </div>
    );
}

export default CategoryCard;