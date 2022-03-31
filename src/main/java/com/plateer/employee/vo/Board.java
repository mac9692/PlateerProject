package com.plateer.employee.vo;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Board {

    private Integer boardId;
    private String writer;
    private String title;
    private String content;
    private LocalDateTime registerDate;
    private LocalDateTime updateDate;

}
