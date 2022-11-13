
-- Show Text case
function showText(text, color)
    SendNUIMessage({type = "showText", text = text, color = color or "#30475e"})
end

exports('showText', showText)

-- Hide Text case
function hideText()
    SendNUIMessage({type = "hideText"})
end

exports('hideText', hideText)