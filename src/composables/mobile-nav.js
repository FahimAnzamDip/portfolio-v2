import { reactive, ref } from "vue";

export function useMobileNav() {
    let loadMobileNav;

    if (window.innerWidth < 640) {
        loadMobileNav = ref(true);
    } else {
        loadMobileNav = ref(false);
    }

    let mobileNav = reactive({
        show: true,
    });

    let toggleMobileNav = () => (mobileNav.show = !mobileNav.show);

    return { mobileNav, loadMobileNav, toggleMobileNav };
}
