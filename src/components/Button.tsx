interface buttonProps {
  onClick: () => {};
  children: string;
}

const Button = ({ children, onClick }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white dark:text-white
      hover:text-black   hover:bg-blue-200 hover:opacity-40 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
