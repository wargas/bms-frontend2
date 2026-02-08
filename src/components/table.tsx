import {
  AgGridReact,
  type AgGridReactProps,
} from "ag-grid-react";
import { useMemo, forwardRef } from "react";
import { useTheme } from "./theme-provider";
import { themeQuartz } from "ag-grid-community";
import { AG_GRID_LOCALE_BR } from "@ag-grid-community/locale";

type Props = AgGridReactProps;



export const Table = forwardRef<AgGridReact, Props>(
  function Table(props, ref) {
    const { theme } = useTheme();

    const aGtheme = useMemo(
      () =>
        themeQuartz.withParams({
          accentColor: "#20A527",
          backgroundColor: theme === "dark" ? "#000" : "#FAFAFA",
          foregroundColor: theme === "dark" ? "#FFF" : "#000",
          browserColorScheme: theme,
          fontFamily: {
            googleFont: "Geist Variable",
          },
          spacing: 6,
          wrapperBorderRadius: 6,
          headerFontSize: 14,
        }),
      [theme]
    );

    return (
      <AgGridReact
        ref={ref}
        localeText={AG_GRID_LOCALE_BR}
        domLayout="normal"
        theme={aGtheme}
        {...props}
      />
    );
  }
);

export const formatters = {
  date: (p: any) =>
    String(p.value).split("-").reverse().join("/"),

  cpf: (p: any) =>
    String(p.value)
      .replace(/\D/g, "")
      .padStart(11, "0")
      .replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      ),
};
