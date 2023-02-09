function Dark_or_light_color(color) {
    switch (true) {
        case color == 'pink', 'yellow', 'orange':
            return "light color";
            break;
        case lang == 'blue', 'purple', 'brown':
            return "dark color";
            break;
        default:
            return "Unknown color";

    }
}