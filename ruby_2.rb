# Given a set of brackets, [, {, (, create a function that determines 
# if the brackets are well-formed (match) or not - even with bracket nesting. 
# bracket('{}');
# // => true
# bracket('{(');
# // => false
# bracket('({[]}{[]})');
# // => true
# bracket('{[)][]}');
# // => false

def brackets(values)
  values.collect do |string|
    balanced?(string: string)
  end
end

def balanced?(string)
  array = string.split("")
  false if array.length.odd?
  openers = []
  until array.empty?
    if is_opener?(first: array.first)
      openers.unshift(array.shift)
    else
      false unless correct_closer?(closer: array.shift, need_to_close: openers.shift)
    end
  end
  true
end

def is_opener?(first)
  ["(", "{", "["].any? { |opener| opener == first }
end

def correct_closer?(closer: , need_to_close: )
  closer == needed_closer = case need_to_close
  when "{"
    "}"
  when "["
    "]"
  when "("
    ")"
  end
end
