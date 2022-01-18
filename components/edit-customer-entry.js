import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import React from 'react';
import Button from './button';

export default function EntryForm() {
    const [_title, setTitle] = useState(' ');
    const [_content, setContent] = useState('');

    const [submitting, setSubmitting] = useState(false);

    const router = useRouter();

    const { id, title, content } = router.query;

    useEffect(() => {
        if (typeof title === 'string') {
            setTitle(title);
        }
        if (typeof content === 'string') {
            setContent(content);
        }
    }, [title, content]);

    async function submitHandler(e) {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('/api/member/insert', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    title: _title,
                    content: _content,
                }),
            });
            const json = await res.text();
            setSubmitting(false);
            if (!res.ok)
                console.log(json.message);
            Router.push('/');
        }
        catch (e) {
            console.log(e.message);
        }
    }

    return (React.createElement("form", { onSubmit: submitHandler },
        React.createElement("div", { className: "my-4" },
            React.createElement("label", { htmlFor: "title" },
                React.createElement("h3", { className: "font-bold" }, "Title")),
            React.createElement("input", { id: "title", className: "shadow border rounded w-full", type: "text", name: "title", value: _title, onChange: (e) => setTitle(e.target.value) })),
        React.createElement("div", { className: "my-4" },
            React.createElement("label", { htmlFor: "content" },
                React.createElement("h3", { className: "font-bold" }, "Content")),
            React.createElement("textarea", { className: "shadow border resize-none focus:shadow-outline w-full h-48", id: "content", name: "content", value: _content, onChange: (e) => setContent(e.target.value) })),
        React.createElement(Button, { disabled: submitting, type: "submit" }, submitting ? 'Saving ...' : 'Save')));
}