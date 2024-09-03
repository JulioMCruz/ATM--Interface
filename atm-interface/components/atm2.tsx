"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

// Define interfaces
interface Option {
    id: number;
    message: string;
}

interface ScreenOption {
    left: Option;
    right: Option;
}

interface Screen {
    title: string;
    options: ScreenOption[];
}

const screenBase: Screen = {
    title: "Are you sure you want to print a $100 banknote?",
    options: [
        {
            left: {
                id: 1,
                message: "1L", 
            },
            right: {
                id: 5,
                message: "1R", 
            },
        },
        {
            left: {
                id: 2,
                message: "2L", 
            },
            right: {
                id: 6,
                message: "2R", 
            },
        },
        {
            left: {
                id: 3,
                message: "3L", 
            },
            right: {
                id: 7,
                message: "3R", 
            },
        },
        {
            left: {
                id: 4,
                message: "4L", 
            },
            right: {
                id: 8,
                message: "4R", 
            },
        },
    ],
};

const screenDisconnected: Screen = {
    title: "Please Authenticate to the ATM",
    options: [
        {
            left: {
                id: 11,
                message: "", 
            },
            right: {
                id: 15,
                message: "", 
            },
        },
        {
            left: {
                id: 12,
                message: "", 
            },
            right: {
                id: 16,
                message: "", 
            },
        },
        {
            left: {
                id: 13,
                message: "", 
            },
            right: {
                id: 17,
                message: "", 
            },
        },
        {
            left: {
                id: 14,
                message: "Login to ATM", 
            },
            right: {
                id: 18,
                message: "Login to ATM", 
            },
        },
    ],
};

const screenMainMenu: Screen = {
    title: "Select a Option",
    options: [
        {
            left: {
                id: 21,
                message: "", 
            },
            right: {
                id: 25,
                message: "", 
            },
        },
        {
            left: {
                id: 22,
                message: "", 
            },
            right: {
                id: 26,
                message: "", 
            },
        },
        {
            left: {
                id: 23,
                message: "Withdraw", 
            },
            right: {
                id: 27,
                message: "Deposit", 
            },
        },
        {
            left: {
                id: 24,
                message: "Account", 
            },
            right: {
                id: 28,
                message: "Exit", 
            },
        },
    ],
};

const screenWithdrawMenu: Screen = {
    title: "Select the Amount to Withdraw",
    options: [
        {
            left: {
                id: 31,
                message: "$1", 
            },
            right: {
                id: 35,
                message: "$5", 
            },
        },
        {
            left: {
                id: 32,
                message: "$10", 
            },
            right: {
                id: 36,
                message: "$20", 
            },
        },
        {
            left: {
                id: 33,
                message: "$50", 
            },
            right: {
                id: 37,
                message: "$100", 
            },
        },
        {
            left: {
                id: 34,
                message: "Get Money", 
            },
            right: {
                id: 38,
                message: "Cancel", 
            },
        },
    ],
};

export default function ATM2Component() {

    const [screen, setScreen] = useState<Screen>(screenDisconnected);

   const handleButtonClick = (action: number) => {
    console.log(action);
    if (action === 18 || action === 14 || action === 38) {
        setScreen(screenMainMenu);
    }
    if (action === 28) {
        setScreen(screenDisconnected);
    }
    if (action === 23) {
        setScreen(screenWithdrawMenu);
    }
   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-100 border-8 border-yellow-700 rounded-lg shadow-lg overflow-hidden">
        <div className="flex">

          <div className="w-1/4 space-y-4 p-4">
            <div style={{height: '100px'}}></div>
            {screen.options.map((item) => (
                <Button
                    key={`left-${item.left.id}`}
                    variant="outline"
                    className="w-full h-12 bg-gray-200 border-2 border-gray-400"
                    onClick={() => handleButtonClick(item.left.id)}
                />
                ))}
          </div>

          <div className="w-1/2 p-4 bg-blue-500 text-white flex flex-col">
            <div className="text-center mb-4 font-bold" style={{height: '100px'}}>{screen.title}</div>
            <div className="flex-grow flex flex-col justify-between text-sm">
            {screen.options.map((item) => (
                <div className="flex justify-between pt-2" key={`left-option-${item.left.id}`}>
                    <div key={`left-option-${item.left.id}`} className="text-left pr-2" style={{maxWidth: '50%'}}>{item.left.message}</div>
                    <div key={`right-option-${item.right.id}`} className="text-right pl-2" style={{maxWidth: '50%'}}>{item.right.message}</div>
                </div>
            ))}

            </div>
          </div>

          <div className="w-1/4 space-y-4 p-4">
            <div style={{height: '100px'}}></div>
            {screen.options.map((item) => (
                <Button
                    key={`right-${item.right.id}`}
                    variant="outline"
                    className="w-full h-12 bg-gray-200 border-2 border-gray-400"
                    onClick={() => handleButtonClick(item.right.id)}
                />
                ))}
          </div>

        </div>

      </div>
    </div>
  )
}