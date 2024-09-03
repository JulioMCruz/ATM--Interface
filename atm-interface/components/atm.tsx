"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function ATMComponent() {
  const [message, setMessage] = useState("Are you sure you\nwant to print a\n$100 banknote?")

  const handleButtonClick = (action: string) => {
    if (action === 'YES') {
      setMessage("Printing $100\nbanknote...\nPlease wait.")
    } else if (action === 'NO') {
      setMessage("Transaction\ncancelled.\nThank you.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-100 border-8 border-yellow-700 rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/4 space-y-4 p-4">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={`left-${num}`}
                variant="outline"
                className="w-full h-12 bg-gray-200 border-2 border-gray-400"
              />
            ))}
          </div>
          <div className="w-1/2 p-4 bg-blue-500 text-white text-center flex items-center justify-center">
            <div className="whitespace-pre-wrap text-lg font-bold">{message}</div>
          </div>
          <div className="w-1/4 space-y-4 p-4">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={`right-${num}`}
                variant="outline"
                className="w-full h-12 bg-gray-200 border-2 border-gray-400"
                onClick={() => handleButtonClick(num === 4 ? 'YES' : num === 3 ? 'NO' : '')}
              />
            ))}
          </div>
        </div>
        <div className="bg-yellow-700 text-white text-center py-2">
          <span className="mr-4">&lt;YES</span>
          <span>NO&gt;</span>
        </div>
      </div>
    </div>
  )
}