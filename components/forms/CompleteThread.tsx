"use client";

import { Checkbox } from "@/components/ui/checkbox"

import { deleteThread, toggleThreadCompletion } from "@/lib/actions/thread.actions";
import { useState } from "react";

interface Props {
    threadId: string;
    com: boolean;
}

function CompleteThread({
    threadId,
    com,
}: Props) {
    return (
        <Checkbox checked={com} className="appearance-none checked:bg-white checked:border-transparent h-8 w-8 rounded border-gray-300 cursor-pointer focus:outline-none" id="terms" onClick={async () => {
            await toggleThreadCompletion(JSON.parse(threadId));
        }} />
    );
}

export default CompleteThread;
