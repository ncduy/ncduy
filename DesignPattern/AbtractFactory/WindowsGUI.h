#ifndef _WINDOWS_GUI_H_
#define _WINDOWS_GUI_H_

#include "Button.h"
#include "Checkbox.h"
#include <iostream>

// Concrete Product: Windows Button
class CMyWindowsButton : public CMyButton
{
public:
    void Render() const override {std::cout << "Rendering Windows Button" << std::endl;};
};

// Concrete Product: Windows Checkbox
class CMyWindowsCheckbox : public CMyCheckbox
{
public:
    void Render() const override {std::cout << "Rendering Windows Checkbox" << std::endl;};
};

#endif // _WINDOWS_GUI_H_
