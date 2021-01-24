import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

function hasErrors(props) {
    return (
        props.formik.touched[props.id] && Boolean(props.formik.errors[props.id])
    );
}

function getErrorMessage(props) {
    return props.formik.touched[props.id] ? props.formik.errors[props.id] : "";
}

export function VinaText(props) {
    return (
        <TextField
            {...props}
            helperText={getErrorMessage(props)}
            error={hasErrors(props)}
        />
    );
}

export function VinaDate(props) {
    return (
        <TextField
            {...props}
            type="date"
            helperText={getErrorMessage(props)}
            error={hasErrors(props)}
        />
    );
}

export function VinaRadioGroup(props) {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <RadioGroup {...props}>
                {props.options.map((item, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            value={item.value}
                            control={<Radio />}
                            label={item.label}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
}

export function VinaNumber(props) { }

export function VinaCheckbox(props) { }

export function VinaSelect(props) {
    return (
        <FormControl variant="outlined" className={props.className} error={hasErrors(props)}>
            <InputLabel id={props.id + "-label"}>{props.label}</InputLabel>
            <Select labelId={props.id + "-label"} {...props}>
                {props.options.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.value}>
                            {item.label}
                        </MenuItem>
                    );
                })}
            </Select>
            <FormHelperText>{getErrorMessage(props)}</FormHelperText>
        </FormControl>
    );
}

export function VinaDateTimePicker(props) {
    return <TextField
        {...props}
        helperText={getErrorMessage(props)}
        error={hasErrors(props)}
        InputLabelProps={{
            shrink: true,
        }}
    />
}