import { useState, useEffect, useRef } from "react";
import { Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const ghostRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(60); // Initial width
  const [titleisFocused, setTitleIsFocused] = useState(false);
  const [amountisFocused, setAmountIsFocused] = useState(false);

  useEffect(() => {
    if (ghostRef.current) {
      const ghostWidth = ghostRef.current.offsetWidth;
      setInputWidth(Math.max(ghostWidth + 20, 60)); // 20px padding
    }
  }, [amount]);

  const handleAdd = () => {
    if (!title || !amount) return;
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    setExpenses([newExpense, ...expenses]);
    setTitle("");
    setAmount("");
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="p-8 w-full max-w-md mx-auto flex flex-col items-center space-y-8">
      {/* Title input */}
      <input
        type="text"
        placeholder={titleisFocused ? "" : "Expense Title"}
        value={title}
        onFocus={() => setTitleIsFocused(true)}
        onBlur={() => setTitleIsFocused(false)}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent w-full outline-none text-center text-black placeholder-gray-400 text-sm font-medium"
      />

      {/* Ghost span (measuring number width) */}
      <div className="absolute top-[-9999px] left-[-9999px] text-6xl font-bold whitespace-pre pointer-events-none">
        <span ref={ghostRef}>{amount || "0"}</span>
      </div>

      {/* Amount input + INR + Add button */}
      <div className="flex items-center justify-center">
        <motion.input
          type="number"
          placeholder={amountisFocused ? "" : "0"}
          onFocus={() => setAmountIsFocused(true)}
          onBlur={() => setAmountIsFocused(false)}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-6xl font-bold text-center outline-none bg-transparent px-1"
          animate={{
            width: inputWidth,
          }}
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ minWidth: 60 }}
        />

        {/* INR Label */}
        <span className="text-sm font-medium text-gray-400 ml-2">INR</span>

        {/* Add Button */}
        <AnimatePresence>
          {title.trim() !== "" && amount.trim() !== "" && (
            <motion.button
              key="add-button"
              onClick={handleAdd}
              className="ml-2 text-white bg-black rounded-full w-10 h-10 flex items-center justify-center leading-none"
              initial={{ opacity: 0, scale: 0.5, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.5, x: -20, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Plus size={18} strokeWidth={3} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Expense List */}
      <div className="space-y-2 w-full">
        <motion.div layout>
          {expenses.map((exp) => (
            <motion.div
              key={exp.id}
              layout
              // layoutTransition={{ type: "spring", stiffness: 500, damping: 30 }}
              initial={{ opacity: 0, y: -15, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center px-2 group hover:bg-gray-200 transition duration-300 rounded-lg p-2"
            >
              <span>{exp.title}</span>

              <div className="flex items-center gap-2">
                <span>{exp.amount} INR</span>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="text-red-500 opacity-0 group-hover:opacity-100 hover:text-red-700 transition-opacity duration-200"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="sticky bottom-0 bg-gray-100 pt-4">
          <div className="border-t border-dotted border-gray-400 my-2"></div>
          <div className="flex justify-between items-center py-2">
            <span className="font-semibold">Total</span>
            <span className="font-bold">
              {expenses.reduce((sum, exp) => sum + exp.amount, 0)} INR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
