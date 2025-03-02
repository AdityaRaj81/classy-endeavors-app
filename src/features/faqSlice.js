import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    faqs: [
        {
            question: "Are DocuTech signatures legally binding?",
            answer:
                "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
        },
        {
            question: "Can I use DocuTech signatures for business contracts?",
            answer: "Yes! DocuTech is widely used in business contracts, ensuring authenticity and security.",
        },
        {
            question: "Do I need an account to sign documents?",
            answer:
                "Not necessarily. Some documents allow guest signing, but an account gives you more control and tracking options.",
        },
        {
            question: "Are DocuTech signatures legally binding?",
            answer:
                "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
        },
    ],
    loading: false,
    successMessage: '',
    errorMessage: '',
};

const faqSlice = createSlice({
    name: 'faqs',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setLoadingComplete: (state) => {
            state.loading = false;
        },
        setFaqs: (state, action) => {
            state.faqs = action.payload;
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        clearMessages: (state) => {
            state.successMessage = '';
            state.errorMessage = '';
        },
    },
});

export const {
    setLoading,
    setLoadingComplete,
    setFaqs,
    setSuccessMessage,
    setErrorMessage,
    clearMessages,
} = faqSlice.actions;

export default faqSlice.reducer;
