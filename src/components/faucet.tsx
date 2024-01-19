"use client";
import React, { useEffect } from "react";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
import { useFormState } from "react-dom";
import { requestFaucet } from "@/actions/request-faucet";

export default function Faucet() {
  const [state, formAction] = useFormState(requestFaucet, {
    error: "",
    success: "",
  });

  useEffect(() => {
    // log error
    if (state.error) {
      toast.error(state.error);
    } else if (state.success) {
      toast.success(state.success);
    }
  }, [state]);

  return (
    <form className="w-full max-w-sm" action={formAction}>
      <h2 className="text-2xl font-bold md:flex md:items-center mb-6">
        SUI Faucet - Get some free SUI
      </h2>

      {/* Network Select Input */}
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-network"
          >
            Network
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            className="bg-gray-100 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-network"
            name="network"
          >
            {["testnet", "devnet", "localnet"].map((net) => (
              <option value={net} key={net}>
                {net}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Sui Address
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-address"
            type="text"
            name="address"
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
