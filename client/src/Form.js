import { Listbox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import { Redirect } from "react-router";
import { register } from "./form handler/register";
import { connect } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";

let people = [
  { name: "Mumbai" },
  { name: "Delhi" },
  { name: "Pune" },
  { name: "Nashik" },
  { name: "CIty Name" },
];

setTimeout(() => {
  people.pop();
}, 2000);

function Alert(props) {
  return (
    <MuiAlert
      elevation={6}
      color="warning"
      severity="warning"
      variant="filled"
      {...props}
    />
  );
}

export default connect(({ redirectTo, data }) => ({ redirectTo, data }), {
  register,
})((props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [selected, setSelected] = useState("None");
  let [name, setName] = useState("N/A");
  let [number, setNum] = useState("N/A");
  let [error, setError] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (e) => {
    if (
      name === "N/A" ||
      name === "" ||
      number === "N/A" ||
      number === "" ||
      selected === "None" ||
      selected === ""
    ) {
      let str = "Name | Mobile Number | City  are required\n";
      setError(str);
      return;
    } else if (isNaN(parseInt(number))) {
      let str = "Mobile Number is not valid";
      setError(str);
      return;
    } else {
      props.register({ name, number, selected });
    }
  };

  if (props.redirectTo) {
    return <Redirect to={props.redirectTo} />;
  }
  return (
    <>
      <div className="fixed relative inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="transition duration-500 ease-in-out p-6 m-6 bg-white text-purple font-bold rounded-full py-5 px-11 text-xl hover:text-white hover:bg-purple transform hover:-translate-y-1 hover:scale-110"
        >
          Apply Now!
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                  <span className="flex p-10 justify-center">
                    We're Excited to see you join.{" "}
                    <span className="wave">👋</span>
                  </span>
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex flex-col m-2">
                    <span>Full Name</span>
                    <input
                      type="text"
                      className="p-2 border-0 border-b-2 border-purple focus:ring-opacity-0"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col m-2">
                    <span>Mobile Number</span>
                    <input
                      type="text"
                      className="p-2 border-0 border-b-2 border-purple focus:ring-opacity-0"
                      value={number}
                      onChange={(e) => setNum(e.target.value)}
                      name="num"
                    />
                  </div>
                  <div className="flex flex-col m-2">
                    <span>City</span>

                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                          <span className="block truncate">
                            {selected.name}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `${
                                    active
                                      ? "text-amber-900 bg-amber-100"
                                      : "text-gray-900"
                                  }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`${
                                        selected ? "font-medium" : "font-normal"
                                      } block truncate`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`${
                                          active
                                            ? "text-amber-600"
                                            : "text-amber-600"
                                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                      >
                                        <CheckIcon
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>

                  <div className="flex justify-center ">
                    <button
                      className="transition duration-500 ease-in-out p-6 m-6 bg-purple text-white font-bold rounded-full py-5 px-11 mt-40 text-xl  transform hover:-translate-y-1 hover:scale-110"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>

                    {(props.error || error) && (
                      <Alert severity="error" onClick={() => setError(null)}>
                        {props.error || error}
                      </Alert>
                    )}
                    {/**<button className='transition duration-500 ease-in-out p-6 m-6 bg-purple text-white font-bold rounded-full py-5 px-11 mt-40 text-xl  transform hover:-translate-y-1 hover:scale-110'>
                      Submit
                    </button> */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
});
