# React + TypeScript Basics --- a mix of small applications

## Section React + TypeScript from the course https://www.udemy.com/course/understanding-typescript/ - Maximilian Schwarzmüller

## Guide by commits - each one has the related topic

[Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

[All React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets)

## Useful clues to make TS happy

### useRef

- When you find a nasty warning like this:

```ts
(property) React.ClassAttributes<HTMLInputElement>.ref?: React.LegacyRef<HTMLInputElement> | undefined
Type 'MutableRefObject<undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'.
  Type 'MutableRefObject<undefined>' is not assignable to type 'RefObject<HTMLInputElement>'.
    Types of property 'current' are incompatible.
      Type 'undefined' is not assignable to type 'HTMLInputElement | null'.ts(2322)
index.d.ts(137, 9): The expected type comes from property 'ref' which is declared here on type 'DetailedHTMLProps<.....

```

- Go to the object or piece of code that is related to that, and check its "native" type

```ts
(alias) useRef<undefined>(): React.MutableRefObject<undefined> (+2 overloads)
import useRef
```

- That give us clues that useRef is a Generic type and is expecting a specific type.
- Ask yourself "What is the type that I am trying to assign to that useRef output? => and that is the type we are going to assign to the generic.
- Then, the initial state of useRef needs to be assigned to HTMLInputRef or null, and that is why we must initialize it with something different than undefined (), in this case, null serves the objective.(see NewTodo.tsx)

### useState

- This happens when we initialize an empty array in useState

```ts
(alias) useState<never[]>(initialState: never[] | (() => never[])): [never[], React.Dispatch<React.SetStateAction<never[]>>] (+1 overload)
```

- This says that the state always will be an empty array. So with the use of generic types we can tell TS how the state will eventually "look like"
